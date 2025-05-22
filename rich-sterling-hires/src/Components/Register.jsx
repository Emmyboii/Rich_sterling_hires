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
        meeting_title: '',
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

        if (!formData.meeting_title || formData.meeting_title.trim() === '') {
            errors.meeting_title = 'Meeting title is required.';
        }

        if (!formData.meeting_start) {
            errors.meeting_start = 'Meeting start time is required.';
        }

        if (!formData.meeting_end) {
            errors.meeting_end = 'Meeting end time is required.';
        }

        if (!formData.meeting_title && formData.meeting_title.trim() === '' && !formData.meeting_start && !formData.meeting_end) {
            errors.meeting = 'Meeting information is needed.';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        if (
            formData.meeting_title.trim() !== '' &&
            formData.meeting_start.trim() !== '' &&
            formData.meeting_end.trim() !== ''
        ) {
            // Clear the grouped error if all fields are filled
            setValidationErrors((prevErrors) => {
                const { meeting, ...rest } = prevErrors;
                return rest;
            });
        }
    }, [formData.meeting_title, formData.meeting_start, formData.meeting_end]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const submissionData = {
            "full_name": formData.full_name,
            "work_email": formData.work_email,
            "company_name": formData.company_name,
            "roles_to_hire": formData.roles_to_hire,
            "heard_about_us": formData.heard_about_us
        };

        // Prepare Google Calendar event data
        const event = {
            summary: formData.meeting_title,
            start: {
                dateTime: new Date(formData.meeting_start).toISOString(),
                timeZone: 'Africa/Lagos', // Set appropriate time zone
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
        };

        try {
            const response = await axios.post('https://app-as-as-a-service-4d3b0169afc7.herokuapp.com/submit_feedback',submissionData);

            if (response.status === 200) {
                setFormData({
                    full_name: '',
                    work_email: '',
                    company_name: '',
                    roles_to_hire: '',
                    heard_about_us: '',
                    meeting_title: '',
                    meeting_start: '',
                    meeting_end: ''
                });

                console.log(response.data);
                navigate('/success');
            } else {
                console.log("Backend response error:", response.data);
                alert("Form submission failed.");
            }

            // Ensure Google API is initialized
            const initialized = await ensureGapiInitialized();
            if (!initialized) {
                setLoading(false);
                return;
            }

            // Sign in if not already signed in
            const authInstance = gapi.auth2.getAuthInstance();

            if (!authInstance) {
                alert("Google Auth instance not found. Please try again later.");
                setLoading(false);
                return;
            }

            if (!authInstance.isSignedIn.get()) {
                await authInstance.signIn();
            }

            // Use the helper to insert the event
            await createGoogleCalendarEvent(event);

            alert("Your meeting has been scheduled! We’ve sent you a calendar invite. Please check your email and accept it to add it to your calendar.");


        } catch (error) {
            console.error("Error during submission:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-[90%] ms:w-[50%] mx-auto rounded-[30px] bg-white py-[35px] shadow-md shadow-black/50">
                <p className='mx-5 text-[22px] font-medium'>Get Started</p>
                <div className='flex w-full items-center'>
                    <div className="m-5 w-full">
                        <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-normal" htmlFor="firstName">Full Name <span className='text-red-500'>*</span></label><br />
                        <input
                            className={`py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.full_name && 'border-red-500'}`}
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder='John Doe'
                        />
                        {validationErrors.full_name && <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.full_name}</p>}
                    </div>
                    <div className="m-5 w-full">
                        <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">Email Address <span className='text-red-500'>*</span></label><br />
                        <input
                            className={`py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.work_email && 'border-red-500'}`}
                            type="email"
                            name="work_email"
                            value={formData.work_email}
                            onChange={handleChange}
                            placeholder='johndoe@email.com'
                        />
                        {validationErrors.work_email && (
                            <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.work_email}</p>
                        )}
                    </div>
                </div>
                <div className="m-5 mt-1">
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">Company Name</label><br />
                    <input
                        className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder='My company'
                    />
                </div>
                <div className="m-5">
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">What role(s) are you looking to hire? <span className='text-red-500'>*</span></label><br />
                    <textarea
                        className={`py-[12px] w-full pl-[15px] h-[100px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.roles_to_hire && 'border-red-500'}`}
                        type="text"
                        name="roles_to_hire"
                        value={formData.roles_to_hire}
                        onChange={handleChange}
                        placeholder='e.g Digital Assitant'
                    />
                    {validationErrors.roles_to_hire && <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.roles_to_hire}</p>}
                </div>
                <div
                    className={`m-5 mt-10 border-black/20 border p-5 rounded-2xl ${validationErrors.meeting && 'border-red-500'}`}
                >
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">
                        Schedule a Meeting <span className='text-red-500'>*</span>
                    </label><br />

                    <input
                        type="text"
                        name="meeting_title"
                        placeholder="Meeting Title"
                        value={formData.meeting_title}
                        onChange={handleChange}
                        className={`py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.meeting_title && 'border-red-500'}`}
                    />
                    {validationErrors.meeting_title && (
                        <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.meeting_start}</p>
                    )}

                    <div className='flex items-center w-full gap-20 my-5'>
                        <div>
                            <label className="block text-lg" htmlFor="meeting_start">Starts at <span className="text-red-500">*</span></label>
                            <input
                                type="datetime-local"
                                name="meeting_start"
                                value={formData.meeting_start}
                                onChange={handleChange}
                                className={`py-[8px] w-full pl-[15px] mt-2 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.meeting_start && 'border-red-500'}`}
                            />
                            {validationErrors.meeting_start && (
                                <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.meeting_start}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-lg" htmlFor="meeting_end">Ends at <span className="text-red-500">*</span></label>
                            <input
                                type="datetime-local"
                                name="meeting_end"
                                value={formData.meeting_end}
                                onChange={handleChange}
                                className={`py-[8px] w-full pl-[15px] mt-2 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none ${validationErrors.meeting_end && 'border-red-500'}`}
                            />
                            {validationErrors.meeting_end && (
                                <p className="text-red-500 absolute text-[16px] font-medium">{validationErrors.meeting_end}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mx-5 my-3">
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="phoneNumber">How did you hear about us?</label><br />
                    <select
                        className="custom-select py-[8px] w-full pl-[15px] pr-[40px] mt-3 rounded-[12px] text-[16px] border border-black/20 focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none"
                        name="heard_about_us"
                        value={formData.heard_about_us}
                        onChange={handleChange}
                        id=""
                    >
                        <option value="">Select...</option>
                        <option value="twitter">Twitter</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="google">Google</option>
                        <option value="colleague">Colleague</option>
                        <option value="podcast">Podcast</option>
                    </select>
                </div>

                <div className="mx-5 mt-5">
                    <button
                        type="submit"
                        className='py-[8px] w-[100%] rounded-[12px] font-semibold sw:text-[18px] bg-blue-500 text-white button-transition'
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="spinner"></div> Submitting...
                            </>
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