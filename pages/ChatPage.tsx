import React, { useEffect } from 'react';
import AgentDemo from '../components/AgentDemo';

export default function ChatPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen animate-in fade-in duration-500">
            <AgentDemo />
        </div>
    );
}
