import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I create an account in the application?',
      answer: 'You can create an account by clicking on the "Signup" button on the home screen. Then, fill in the required information, such as your username, email, and password.',
      isOpen: false,
    },
    {
      question: 'How do I log in to my account?',
      answer: 'Go to the login screen and enter your email and password associated with your account.',
      isOpen: false,
    },
    {
      question: 'How do I add a book to my favorites list?',
      answer: 'Navigate to the book page and click on the "Add to Favorites" button. You can also do this from your personal library.',
      isOpen: false,
    },
    {
      question: 'How do I write a review for a book?',
      answer: 'Go to the book page and look for the "Add Review" or "Leave Comment" option. Write your review and save the changes.',
      isOpen: false,
    },
    {
      question: 'Can I edit or delete my reviews?',
      answer: 'Yes, you can edit or delete your reviews. Go to your profile, find the reviews section, and you will find options to edit or delete.',
      isOpen: false,
    },
    {
      question: 'How does the wishlist work?',
      answer: 'You can add books to your wishlist from the book page. This will help you keep track of the books you would like to read in the future.',
      isOpen: false,
    },
    {
      question: 'I forgot my password, how do I recover it?',
      answer: 'On the login screen, click on "Forgot my password" and enter your email. We will send you a link to reset your password.',
      isOpen: false,
    },
    {
      question: 'How do I change my personal information in my account?',
      answer: 'Go to your profile settings from the home screen and there you will find options to edit your personal information.',
      isOpen: false,
    },
    {
      question: "How do I contact technical support in case of problems?",
      answer:
        "You can contact technical support by sending an email to support@yourbookapp.com. We are here to help you with any problem you may have."
    },
    {
      question: "What should I do if I can't find a book in the application?",
      answer:
        "If you can't find a book, you can suggest it by sending an email to our support team. We are constantly working to expand our collection."
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="p-8 bg-white shadow-md">
      <h2 className="text-3xl font-medium mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <button
              className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-2"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <HiOutlineChevronDown
                className={`${faq.isOpen ? 'rotate-180' : ''} transition duration-200`}
              />
            </button>
            {faq.isOpen && (
              <div className="mt-2 pl-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;