import React from 'react';
import { Network, Database, Globe } from 'lucide-react';

const steps = [
    {
        icon: <Database className="w-6 h-6 text-accent" />,
        title: "Data Ingestion",
        desc: "We do not allow loss of more than 2% of context across data migration.",
        stats: { main: "10B+", label: "Tokens Processed" }
    },
    {
        icon: <Network className="w-6 h-6 text-accent" />,
        title: "Transformation",
        desc: "Releasing you from the need to constantly track market trends. We operate with massive intelligence frameworks.",
        stats: { main: "99.9%", label: "Accuracy" }
    },
    {
        icon: <Globe className="w-6 h-6 text-accent" />,
        title: "Global Output",
        desc: "You can multiply your reach without specialized knowledge or experience.",
        stats: { main: "100+", label: "Markets Active" }
    }
];

export default function Protocol() {
    return (
        <div className="w-full py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-sans font-light text-4xl text-primary mb-12">
                    Trust-based <br /><span className="font-bold">management protocol</span>
                </h2>

                <div className="flex flex-col gap-6 w-full lg:w-3/4">
                    {steps.map((step, i) => (
                        <div key={i} className="glass-panel p-8 md:p-12 rounded-[2rem] border-l-4 border-l-transparent hover:border-l-accent transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">

                            <div className="flex flex-col gap-4 max-w-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-lg">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-sans font-bold text-2xl text-primary tracking-tight">{step.title}</h3>
                                </div>
                                <div className="flex items-start gap-4 mt-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                    <p className="font-sans text-[#9CA3AF] text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end md:items-start shrink-0 min-w-[150px]">
                                <div className="font-sans font-bold text-4xl text-accent tracking-tighter shadow-accent/50 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                    {step.stats.main}
                                </div>
                                <div className="font-sans text-[10px] uppercase tracking-widest text-[#4B5563] mt-1">
                                    {step.stats.label}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
