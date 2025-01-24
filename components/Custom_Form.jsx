'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Alert } from './ui/alert'; // Import shadcn alert
import { MailIcon, User2Icon, PenIcon, ArrowRightIcon } from 'lucide-react';

const Custom_Form = () => {
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // New state for loading status
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true); // Start loading

        const form = e.target;

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
            }),
        });

        const result = await response.json();

        if (result.success) {
            form.reset(); // Reset form fields
            setSubmissionStatus({ type: "success", message: "Form submitted successfully!" });
        } else {
            setSubmissionStatus({ type: "error", message: "Submission failed. Try again." });
        }

        setIsLoading(false); // Stop loading after submission completes

        // Automatically hide the alert after a few seconds
        setTimeout(() => setSubmissionStatus(null), 3000);
    }

    return (
        <div className="relative">
            {/* Centered Alert at the top */}
            {submissionStatus && (
                <Alert
                    variant="success"
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md transition duration-300 ${
                        submissionStatus.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                    {submissionStatus.message}
                </Alert>
            )}

            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                <div className='relative flex items-center'>
                    <Input type='text' id='name' name='name' placeholder='Name' required />
                    <User2Icon className='absolute right-6 size={20}' />
                </div>
                <div className='relative flex items-center'>
                    <Input type='email' id='email' name='email' placeholder='Email' required />
                    <MailIcon className='absolute right-6 size={20}' />
                </div>
                <div className='relative flex items-center'>
                    <Textarea id='message' name='message' placeholder='Message' required />
                    <PenIcon className='absolute top-4 right-6 size={20}' />
                </div>
                <Button className='flex items-center text-lg' type='submit' disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Let's Talk"} <ArrowRightIcon />
                </Button>
            </form>
        </div>
    );
}

export default Custom_Form;