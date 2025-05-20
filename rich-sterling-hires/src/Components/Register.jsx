import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { gapi } from "gapi-script";

const Register = () => {

    const [formData, setFormData] = useState({
        full_name: '',
        work_email: '',
        company_name: '',
        roles_to_hire: '',
        heard_about_us: ''
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
        }

        const form = new FormData(e.target);
        const title = form.get("title");
        const start = new Date(form.get("start")).toISOString();
        const end = new Date(form.get("end")).toISOString();

        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        if (!isSignedIn) {
            await gapi.auth2.getAuthInstance().signIn();
        }

        const event = {
            summary: title,
            start: { dateTime: start },
            end: { dateTime: end },
        };

        gapi.client.calendar.events
            .insert({
                calendarId: "primary",
                resource: event,
            })
            .then((res) => {
                alert("Your Meeting has been scheduled!");
                console.log(res);
            })
            .catch((err) => {
                alert("Error scheduling event.");
                console.error(err);
            });

        try {
            const response = await axios.post('https://app-as-as-a-service-4d3b0169afc7.herokuapp.com/submit_feedback', { submission: submissionData });
            if (response.status === 200) {
                setFormData({
                    full_name: '',
                    work_email: '',
                    company_name: '',
                    roles_to_hire: '',
                    heard_about_us: ''
                });
                console.log(response.data);
                navigate('/success')
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-[90%] ms:w-[50%] mx-auto rounded-[30px] bg-white py-[35px] shadow-md shadow-black/50">
                <div className='flex w-full items-center'>
                    <div className="mx-5 my-3 w-full">
                        <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-normal" htmlFor="firstName">Full Name <span className='text-red-500'>*</span></label><br />
                        <input
                            className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder='John Doe'
                        />
                        {validationErrors.full_name && <p className="text-red-500 text-[16px] font-medium">{validationErrors.full_name}</p>}
                    </div>
                    <div className="mx-5 my-3 w-full">
                        <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">Email Address <span className='text-red-500'>*</span></label><br />
                        <input
                            className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                            type="email"
                            name="work_email"
                            value={formData.work_email}
                            onChange={handleChange}
                            placeholder='johndoe@email.com'
                        />
                        {validationErrors.work_email && (
                            <p className="text-red-500 text-[16px] font-medium">{validationErrors.work_email}</p>
                        )}
                    </div>
                </div>
                <div className="mx-5 my-3">
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
                <div className="mx-5 my-3">
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">What role(s) are you looking to hire? <span className='text-red-500'>*</span></label><br />
                    <textarea
                        className='py-[12px] w-full pl-[15px] h-[100px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                        type="text"
                        name="roles_to_hire"
                        value={formData.roles_to_hire}
                        onChange={handleChange}
                        placeholder='e.g Digital Assitant'
                    />
                    {validationErrors.roles_to_hire && <p className="text-red-500 text-[16px] font-medium">{validationErrors.roles_to_hire}</p>}
                </div>
                <div className="m-5 border-black/20 border p-5 rounded-2xl">
                    <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-normal" htmlFor="email">Schedule a Meeting <span className='text-red-500'>*</span></label><br />
                    <input
                        type="text" name="title"
                        placeholder="Meeting Title"
                        className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                        required
                    />
                    <div className='flex w-full gap-20'>
                        <input
                            type="datetime-local"
                            name="start"
                            className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                            required
                        />
                        <input
                            type="datetime-local"
                            name="end"
                            className='py-[8px] w-full pl-[15px] mt-3 rounded-[12px] text-[16px] border-black/20 border focus:border-blue-400 focus:shadow focus:shadow-blue-400 focus:border-2 outline-none'
                            required
                        />
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