const handleCreateProject = async (event) => {
  event.preventDefault();

  const name = document.getElementById('project-name').value;
  const description = document.getElementById('project-description').value;
  const needsFunding = document.getElementById('project-funding').value;

  console.log({
    name,
    description,
    needed_funding: needsFunding,
  });

  const response = await fetch('/api/projects', {
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
      needed_funding: needsFunding,
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Error posting the project');
  }
};

document.getElementById('project-form').addEventListener('submit', handleCreateProject);