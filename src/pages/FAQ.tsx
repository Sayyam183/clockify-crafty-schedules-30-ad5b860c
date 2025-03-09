
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FAQ = () => {
  const [showChat, setShowChat] = useState(false);
  const { toast } = useToast();
  
  const handleChatOpen = () => {
    setShowChat(true);
    toast({
      title: "Live Chat Activated",
      description: "A support agent will be with you shortly.",
    });
  };
  
  const handleChatClose = () => {
    setShowChat(false);
    toast({
      title: "Live Chat Ended",
      description: "Thank you for using our support service.",
    });
  };

  const faqs = [
    {
      question: "Who is Clockify designed for?",
      answer: "Clockify is specifically designed for teenagers aged 13-18 who want to improve their time management skills. Our schedules and tips are tailored to the unique challenges that students face, such as balancing schoolwork, extracurricular activities, social life, and rest."
    },
    {
      question: "How do I choose the right schedule for me?",
      answer: "Start by considering your primary needs - are you focused on academics, balancing sports, managing creative pursuits, or juggling a part-time job? Browse our categories to find schedules that match your situation. You can also filter by difficulty level, with 'Easy' schedules offering more flexibility and 'Hard' ones providing more structure. Remember, you can always customize any schedule to better fit your specific needs."
    },
    {
      question: "Can I customize the schedules?",
      answer: "Absolutely! While our schedules provide excellent starting points, we encourage you to customize them to fit your unique situation. You can edit activity names, adjust time blocks, and make any other changes that help the schedule work better for you. Your personalized schedule will be saved to your account for future use."
    },
    {
      question: "What if I have an unpredictable schedule?",
      answer: "Many teens have schedules that vary day-to-day or week-to-week. In this case, we recommend creating multiple schedule templates for different types of days (e.g., school days, game days, work days). You can also use our more flexible templates and focus on time-blocking categories of activities rather than specific times. Our 'Tips' section also has advice specifically for managing variable schedules."
    },
    {
      question: "How long does it take to see results from better time management?",
      answer: "Most users report noticeable improvements within 2-3 weeks of consistently following a schedule. However, the exact timeline varies depending on your starting point and how consistently you implement the changes. Remember that time management is a skill that develops over time - be patient with yourself and celebrate small improvements!"
    },
    {
      question: "What should I do if I keep falling behind on my schedule?",
      answer: "If you're consistently unable to stick to your schedule, it might be too ambitious or not aligned with your actual needs and habits. Try these steps: 1) Track how you actually spend your time for a few days, 2) Compare that to your ideal schedule to see where the biggest discrepancies are, 3) Adjust your schedule to be more realistic - perhaps you need more transition time between activities or your study blocks are too long, 4) Start with easier schedules before moving to more demanding ones."
    },
    {
      question: "Is Clockify available as a mobile app?",
      answer: "Currently, Clockify is a web-based application optimized for both desktop and mobile browsers. You can bookmark the site on your phone for easy access. We're developing dedicated mobile apps for iOS and Android, which will be available in the near future."
    },
    {
      question: "How do I track my progress over time?",
      answer: "Clockify includes built-in tracking features that allow you to mark completed activities and see your adherence to your schedule over time. You can view weekly and monthly reports on your dashboard to track your progress. Many users also find it helpful to keep a brief journal noting what worked well and what challenges they faced each day."
    },
    {
      question: "Can parents/guardians access their teen's schedules?",
      answer: "We believe in promoting teen independence while recognizing the supportive role of parents. Teens can choose to share their schedules with parents through a view-only link. However, the account and schedule management remains in the teen's control. This approach helps teens develop responsibility while still allowing for parental guidance when needed."
    },
    {
      question: "What if I have special educational needs or accommodations?",
      answer: "We understand that teens with ADHD, learning disabilities, or other conditions may need adapted approaches to time management. We have specific schedule templates designed with these needs in mind, incorporating more frequent breaks, varied activities, and visual cues. Our blog also features tips from experts on time management strategies for different learning styles and needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-12 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about Clockify and time management for teens.
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white slide-in-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 bg-clockify-lightGray scale-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 bounce">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help! Reach out to our support team for assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:support@clockify.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-clockify-blue hover:bg-clockify-darkBlue">
              Email Support
            </a>
            <Button 
              onClick={handleChatOpen} 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-clockify-blue bg-white hover:bg-gray-50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>
      
      {/* Live Chat Modal */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 z-50 scale-in">
          <Card className="p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-clockify-blue" />
                Live Support
              </h3>
              <Button variant="ghost" size="sm" onClick={handleChatClose}>×</Button>
            </div>
            <div className="h-60 bg-gray-50 rounded p-3 mb-4 overflow-auto">
              <div className="flex mb-2">
                <div className="bg-clockify-lightBlue text-white rounded-lg p-2 ml-auto">
                  How can I help you today?
                </div>
              </div>
              <div className="flex mb-2">
                <div className="bg-gray-200 rounded-lg p-2">
                  Welcome to Clockify Support! An agent will be with you shortly.
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow p-2 border rounded"
              />
              <Button>Send</Button>
            </div>
          </Card>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default FAQ;
