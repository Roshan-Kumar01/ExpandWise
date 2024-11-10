// ChatInterface.js
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import './ChatInterface.css';

function ChatInterface() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! How can I help you today?' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Function to preprocess AI response
    const preprocessResponse = (response) => {
        return response
            .replace(/##\s*/g, '')                     // Remove '## ' from headings
            .replace(/\*\*(.*?)\*\*/g, '$1')           // Remove bold markdown (e.g., **text**)
            .replace(/\*\s/g, '\n- ')                  // Ensure each bullet point (*) starts on a new line
            .replace(/(\d+\.)\s/g, '\n$1 ')            // Ensure each numbered point (e.g., 1.) starts on a new line
            .trim();                                   // Trim any extra whitespace
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Add user message to the chat
        const userMessage = { role: 'user', content: inputMessage };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            // Make an API call to get the AI response
            const response = await fetch('/api/v1/ai-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputMessage })
            });

            const data = await response.json();
            // Check if the response was successful
            if (response.ok) {
                const aiResponse = {
                    role: 'assistant',
                    content: preprocessResponse(data.response)
                };
                setMessages(prev => [...prev, aiResponse]);
            } else {
                throw new Error(data.error || 'Failed to fetch response');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            {/* Chat Header */}
            <div className="chat-header">
                <h1>AI Assistant</h1>
                <p>Ask me anything!</p>
            </div>

            {/* Messages Container */}
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message-wrapper ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
                    >
                        <div className="message-content">
                            <div className={`avatar ${message.role}-avatar`}>
                                {message.role === 'user' ? 
                                    <User className="avatar-icon" /> : 
                                    <Bot className="avatar-icon" />
                                }
                            </div>
                            <div className="message-bubble">
                                {/* Display each line as a separate <p> tag */}
                                {message.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="loading-indicator">
                        <Loader2 className="loading-spinner" />
                        <span>Thinking...</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="chat-input-form">
                <div className="input-container">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="message-input"
                    />
                    <button
                        type="submit"
                        disabled={!inputMessage.trim() || isLoading}
                        className="send-button"
                    >
                        <Send className="send-icon" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChatInterface;
