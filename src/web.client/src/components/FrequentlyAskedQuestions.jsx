import FAQItem from "./FAQItem";

const FrequentlyAskedQuestions = () => {
    const faqData = [
        {
            question: "What is Duuty?",
            answer: "Duuty is a comprehensive platform that helps you manage your tasks, projects, and team collaboration efficiently. It streamlines your workflow and improves productivity across your organization."
        },
        {
            question: "How do I create a new task?",
            answer: "To create a new task, navigate to the Tasks section and click on the '+ New Task' button. Fill in the required details such as task name, description, due date, and assignee, then click 'Create'."
        },
        {
            question: "Can I invite team members to my workspace?",
            answer: "Yes, you can invite team members by going to Settings > Team Management and clicking on 'Invite Members'. Enter their email addresses and set appropriate permission levels before sending the invitations."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Yes, Duuty is available as a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store to access your workspace on the go."
        },
        {
            question: "How do I integrate Duuty with other tools?",
            answer: "Duuty offers integrations with popular tools like Slack, Google Calendar, and Microsoft Teams. Go to Settings > Integrations to connect your existing tools and enhance your workflow."
        },
        {
            question: "What are the pricing plans?",
            answer: "Duuty offers several pricing tiers including Free, Standard, and Enterprise plans. Each plan comes with different features and user limits. Visit our Pricing page to see detailed information about each plan."
        },
        {
            question: "How secure is my data on Duuty?",
            answer: "Duuty takes security seriously. We use industry-standard encryption for data storage and transfer, regular security audits, and follow best practices for data protection. Your information is safe with us."
        },
        {
            question: "Can I export my data from Duuty?",
            answer: "Yes, you can export your data at any time. Go to Settings > Data Management and select 'Export Data'. You can choose to export specific projects or your entire workspace in various formats."
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Find answers to common questions about using Duuty.
                    </p>
                </div>
                <div className="mt-12">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;