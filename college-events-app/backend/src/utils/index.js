export const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
};

export const validateEventData = (data) => {
    const { title, description, date } = data;
    if (!title || !description || !date) {
        return { valid: false, message: 'Title, description, and date are required.' };
    }
    return { valid: true };
};