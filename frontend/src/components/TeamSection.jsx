import React from 'react';

const teamMembers = [
    {
        name: "Elena Rostova",
        role: "CEO & Co-founder",
        subrole: "Director of Global Operations",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    },
    {
        name: "Marcus Chen",
        role: "CTO & Co-founder",
        subrole: "Head of AI Localization",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
    },
    {
        name: "Sarah Jenkins",
        role: "Head Linguist",
        subrole: "Lead Quality Assurance",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
    }
];

export default function TeamSection() {
    return (
        <div className="w-full py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, i) => (
                    <div
                        key={i}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0A0B0E] border border-white/[0.05] hover:border-[#00e5c3]/40 transition-colors duration-500"
                    >
                        {/* Photo — grayscale at rest, color + slight scale on hover */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        {/* Gradient overlay — transparent → dark at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/60 to-transparent" />

                        {/* Subtle teal tint on hover */}
                        <div className="absolute inset-0 bg-[#00e5c3] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 mix-blend-screen" />

                        {/* Name/role block — slides up slightly on hover */}
                        <div className="absolute bottom-0 left-0 p-8 w-full overflow-hidden">
                            <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-sans font-bold text-2xl tracking-tight text-primary">
                                        {member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}
                                    </h3>
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,229,195,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <p className="font-sans text-xs uppercase tracking-widest text-[#9CA3AF] mt-4 mb-1">
                                    {member.role}
                                </p>
                                <p className="font-sans text-[10px] text-[#4B5563] group-hover:text-[#64748B] transition-colors duration-300">
                                    {member.subrole}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
