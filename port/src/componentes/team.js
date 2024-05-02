function Team({ members }) {
    return (
    <div>
        {members.map((member) => (
        <div key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
        </div>
        ))}
    </div>
    );
}