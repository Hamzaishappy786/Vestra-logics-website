import SharedNavbar from "@/components/sections/SharedNavbar";
import ContactForm from "@/components/sections/contact-form";
import SharedFooter from "@/components/sections/SharedFooter";

export default function ContactsPage() {
  return (
    <main className="bg-white">
      <SharedNavbar />
      <ContactForm />
      <SharedFooter />
    </main>
  );
}
