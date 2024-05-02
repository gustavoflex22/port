
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import ProjectList from '../components/ProjectList';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function HomePage() {
  const sampleProjects = [
    { id: 1, name: 'Projeto 1', description: 'Descrição do Projeto 1' },
    { id: 2, name: 'Projeto 2', description: 'Descrição do Projeto 2' },
  ];

  const teamMembers = [
    { id: 1, name: 'Membro 1', role: 'Desenvolvedor' },
    { id: 2, name: 'Membro 2', role: 'Designer' },
  ];

  return (
    <div>
      <Menu />
      <Banner />
      <ProjectList projects={sampleProjects} />
      <Team members={teamMembers} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;
