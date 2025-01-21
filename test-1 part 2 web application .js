import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import { useNavigate } from 'react-router-dom';

const NewDiscussion = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make the API call to create a new discussion
            await axios.post('http://localhost:5000/api/discussions', {
                title,
                content,
            });

            // Redirect to the discussions page after successful submission
            navigate('/discussions');
        } catch (error) {
            console.error('Error creating discussion:', error);

            // Provide feedback to the user
            alert(
                error.response?.data?.message || 'Failed to create discussion. Please try again.'
            );
        }
    };

    return (
        <div>
            <h1>Post a New Discussion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post Discussion</button>
            </form>
        </div>
    );
};

export default NewDiscussion;

