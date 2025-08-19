//
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
// import emailjs from 'emailjs-com';
// import '../styles/Contact.css';
//
// const Contact: React.FC = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//
//         try {
//             await emailjs.send(
//                 "service_5hk3l4v",   // Service ID
//                 "template_65nafjq",  // Template ID
//                 {
//                     name: formData.name,      // matches {{name}}
//                     email: formData.email,    // matches {{email}}
//                     message: formData.message // matches {{message}}
//                 },
//                 "Pnc17ZVNAdSyzl79t"  // Public Key
//             );
//
//
//             setSubmitStatus("success");
//             setFormData({ name: "", email: "", message: "" });
//         } catch (error) {
//             console.error("EmailJS error:", error);
//             setSubmitStatus("error");
//         } finally {
//             setIsSubmitting(false);
//             setTimeout(() => setSubmitStatus(null), 5000);
//         }
//     };
//
//     return (
//         <section className="contact-section">
//             <div className="contact-container">
//                 <motion.div className="contact-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//                     <h2 className="contact-title">Get In Touch</h2>
//                     <p className="contact-subtitle">Have a project in mind or want to collaborate? Feel free to reach out.</p>
//                 </motion.div>
//
//                 <div className="contact-content">
//                     {/* Contact Info */}
//                     <motion.div className="contact-info" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//                         <div className="info-item">
//                             <div className="info-icon"><FiMail /></div>
//                             <div className="info-text">
//                                 <h3>Email</h3>
//                                 <p>thathshilaashanganie9501@gmail.com</p>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="info-icon"><FiPhone /></div>
//                             <div className="info-text">
//                                 <h3>Phone</h3>
//                                 <p>+94 (71) 317-9180</p>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="info-icon"><FiMapPin /></div>
//                             <div className="info-text">
//                                 <h3>Location</h3>
//                                 <p>NO,61/3,Denagama,West,Hakmana,Matara</p>
//                             </div>
//                         </div>
//                     </motion.div>
//
//                     {/* Contact Form */}
//                     <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//                         {submitStatus === "success" && <div className="form-alert success">Message sent successfully! I'll get back to you soon.</div>}
//                         {submitStatus === "error" && <div className="form-alert error">Something went wrong. Please try again later.</div>}
//
//                         <div className="form-group">
//                             <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
//                             <label>Your Name</label>
//                         </div>
//
//                         <div className="form-group">
//                             <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
//                             <label>Your Email</label>
//                         </div>
//
//                         <div className="form-group">
//                             <textarea name="message" placeholder=" " value={formData.message} onChange={handleChange} required></textarea>
//                             <label>Your Message</label>
//                         </div>
//
//                         <button type="submit" className="submit-btn" disabled={isSubmitting}>
//                             {isSubmitting ? "Sending..." : (<><FiSend className="btn-icon" /> Send Message</>)}
//                         </button>
//                     </motion.form>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default Contact;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus("error");
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await emailjs.send(
                "service_3xgx0vl",   // Service ID
                "template_65nafjq",  // Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                "Pnc17ZVNAdSyzl79t"  // Public Key
            );

            console.log("EmailJS success:", result.status, result.text);
            setSubmitStatus("success");
            setFormData({ name: '', email: '', message: '' });
        } catch (error: any) {
            console.error("EmailJS error:", error.status, error.text || error.message);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">Have a project in mind or want to collaborate? Feel free to reach out.</p>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="info-item">
                            <div className="info-icon"><FiMail /></div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>thathshilaashanganie9501@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiPhone /></div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+94 (71) 317-9180</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiMapPin /></div>
                            <div className="info-text">
                                <h3>Location</h3>
                                <p>NO,61/3, Denagama, West, Hakmana, Matara</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {submitStatus === "success" && (
                            <div className="form-alert success">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="form-alert error">
                                Something went wrong. Please check your inputs or try again later.
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label>Your Name</label>
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label>Your Email</label>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label>Your Message</label>
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : (<><FiSend className="btn-icon" /> Send Message</>)}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
