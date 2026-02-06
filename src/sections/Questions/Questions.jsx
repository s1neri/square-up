import Sections from "@/layouts/Sections";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";

const Questions = () => {
  const questionItems = [
    'What services does SquareUp provide?',
    'How can SquareUp help my business?',
    'What industries does SquareUp work with?',
    'How long does it take to complete a project with SquareUp?',
    'Do you offer ongoing support and maintenance after the project is completed?',
    'Can you work with existing design or development frameworks?',
    'How involved will I be in the project development process?',
    'Can you help with website or app maintenance and updates?',
  ]

  return (
    <Sections
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Still you have any questions? Contact our Team via hello@squareup.com"
      bgUrl="src/assets/images/sections/3.png"
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Sections>
  )
}

export default Questions