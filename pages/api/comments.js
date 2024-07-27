const comments = (req, res) => {
    if (req.method === "POST") {
        const userEmail = req.body.email;
        const userComment = req.body.comment;
        if (!userEmail || !userEmail.includes("@") || !userComment || userComment.trim() === "") {
            res.status(422).json({ message: "Invalid input." });
            return;
        }
        // Store in a database
        const newComment = {
            id: new Date().toISOString(),
            email: userEmail,
            comment: userComment,
        };
        console.log(newComment);
        res.status(201).json({ message: "Added comment!", comment: newComment });
    }
}