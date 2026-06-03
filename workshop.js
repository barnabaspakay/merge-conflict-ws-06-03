const workshop = {
    name: "Merge Conflict Workshop",
    description: "Learn how to resolve merge conflicts in Git.",
    steps: [
        {
            title: "Step 1: Create a Merge Conflict",
            content: "Create a new branch and make changes to the same file as the main branch. Then, try to merge the branches to create a conflict."
        },
        {
            title: "Step 2: Identify the Conflict",
            content: "Use Git commands to identify the conflicting files and understand the changes that caused the conflict."
        },]
};

function displayWorkshop(workshop) {
    console.log(`Workshop Name: ${workshop.name}`);
    console.log(`Description: ${workshop.description}`);
    console.log("Steps:");
    workshop.steps.forEach((step, index) => {
        console.log(`${index + 1}. ${step.title}`);
        console.log(`   ${step.content}`);
    });
}














function addStep(workshop, title, content) {
    workshop.steps.push({ title, content });
}

addStep(workshop, "Step 3: Resolve the Conflict", "Use a text editor or Git's built-in tools to resolve the conflict by choosing which changes to keep.");

displayWorkshop(workshop);



















