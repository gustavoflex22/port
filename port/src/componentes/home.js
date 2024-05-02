function HomePage() {
    
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