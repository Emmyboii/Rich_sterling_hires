import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { gapi } from "gapi-script";
import { ensureGapiInitialized, createGoogleCalendarEvent } from '../utils/google';

const Register = () => {

    const [formData, setFormData] = useState({
        full_name: '',
        work_email: '',
        company_name: '',
        roles_to_hire: '',
        heard_about_us: '',
        meeting_start: '',
        meeting_end: ''
    });

    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {};

        if (!formData.full_name || formData.full_name.trim() === '') {
            errors.full_name = 'Your name is required.';
        }

        if (!formData.work_email || formData.work_email.trim() === '') {
            errors.work_email = 'Your email is required.';
        } else if (!emailRegex.test(formData.work_email.trim())) {
            errors.work_email = 'Please enter a valid email address.';
        }

        if (!formData.roles_to_hire || formData.roles_to_hire.trim() === '') {
            errors.roles_to_hire = 'We need to know the role(s) you need.';
        }


        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const submissionData = {
            full_name: formData.full_name,
            work_email: formData.work_email,
            company_name: formData.company_name,
            roles_to_hire: formData.roles_to_hire,
            heard_about_us: formData.heard_about_us
        };

        const shouldScheduleMeeting = formData.meeting_start && formData.meeting_end;

        const event = shouldScheduleMeeting
            ? {
                summary: `A discovery call with ${formData.full_name} from ${formData.company_name}`,
                description: `A discovery call with ${formData.full_name} from ${formData.company_name}`,
                start: {
                    dateTime: new Date(formData.meeting_start).toISOString(),
                    timeZone: 'Africa/Lagos',
                },
                end: {
                    dateTime: new Date(formData.meeting_end).toISOString(),
                    timeZone: 'Africa/Lagos',
                },
                attendees: [
                    { email: formData.work_email },
                    { email: "rcwickles@gmail.com" }
                ],
                reminders: {
                    useDefault: true,
                },
            }
            : null;

        try {
            const response = await axios.post('https://app-as-as-a-service-4d3b0169afc7.herokuapp.com/submit_feedback', submissionData);

            if (response.status !== 200) {
                alert("Form submission to Jotform failed. Please try again.");
                return;
            }

            // Proceed to calendar scheduling only if both date fields are filled
            if (shouldScheduleMeeting && event) {
                const initialized = await ensureGapiInitialized();
                if (!initialized) {
                    alert("Failed to initialize Google API. Please try again.");
                    return;
                }

                const authInstance = gapi.auth2.getAuthInstance();
                if (!authInstance) {
                    alert("Google Auth instance not found. Please try again later.");
                    return;
                }

                if (!authInstance.isSignedIn.get()) {
                    await authInstance.signIn();
                }

                await createGoogleCalendarEvent(event);

                alert("Your meeting has been scheduled! We've sent you a calendar invite. Please check your email and accept it to add it to your calendar.");
            } else {
                alert("Form submitted successfully!");
            }

            // Reset form
            setFormData({
                full_name: '',
                work_email: '',
                company_name: '',
                roles_to_hire: '',
                heard_about_us: '',
                meeting_start: '',
                meeting_end: ''
            });

            navigate('/success');

        } catch (error) {
            if (error.response) {
                console.error("Jotform submission error:", error.response.data);
                alert("Form submission failed: " + (error.response.data.message || "Unknown error"));
            } else if (error.message && (error.message.includes("gapi") || error.message.includes("calendar"))) {
                console.error("Google Calendar error:", error);
                alert("Scheduling the meeting failed. Please try again later.");
            } else {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='register' className="flex items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white rounded-3xl shadow-lg sk:p-8 p-4 space-y-6"
            >
                <h2 className="text-3xl font-semibold text-gray-800 text-center">Get Started</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Full Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                            className={`mt-2 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${validationErrors.full_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                        {validationErrors.full_name && <p className="text-red-500 mt-1 text-sm">{validationErrors.full_name}</p>}
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Email Address <span className='text-red-500'>*</span>
                        </label>
                        <input
                            className={`mt-2 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${validationErrors.work_email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                                }`}
                            type="email"
                            name="work_email"
                            value={formData.work_email}
                            onChange={handleChange}
                            placeholder="johndoe@email.com"
                        />
                        {validationErrors.work_email && <p className="text-red-500 mt-1 text-sm">{validationErrors.work_email}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Company Name</label>
                    <input
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="My company"
                    />
                </div>

                <div>
                    <label className="block text-[17px] font-medium text-gray-700">
                        What role(s) are you looking to hire? <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                        className={`mt-2 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${validationErrors.roles_to_hire ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        name="roles_to_hire"
                        value={formData.roles_to_hire}
                        onChange={handleChange}
                        placeholder="e.g Digital Assistant"
                        rows="4"
                    ></textarea>
                    {validationErrors.roles_to_hire && <p className="text-red-500 mt-1 text-sm">{validationErrors.roles_to_hire}</p>}
                </div>

                <div className={`p-5 border rounded-2xl`}>
                    <label className="block text-xl text-center font-semibold text-gray-700">Book a Discovery Call</label>

                    <div
                        className="calendly-inline-widget calendly-wrapper"
                        data-url="https://calendly.com/rcwickles">
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <div className="spinner mr-2"></div> Submitting...
                            </span>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Register