import { readFile, writeFile } from 'node:fs/promises'

async function getProjects(filter = {}) {
  try {
    const data = await readFile('./data/Projects.json')
    const Projects = JSON.parse(data)

    if (filter.deleted) {
      return Projects.filter((Projects) => !Projects.deleted)
    }

    return Projects
  } catch (err) {
    return []
  }
}

async function saveProjects(Projects) {
  return writeFile('./data/Projects.json', JSON.stringify(Projects))
}

async function getProjectsById(id) {
  const Projects= await getProjects()
  return Projects.find((Projects) => Projects.id === id) || null
}

async function createProjects(Projects) {
  const Projects = await getProjects()

  const newProjects = {
    ...Projects,
    id: Projects.length + 1
  }

  Projects.push(newProjects)

  await saveProjects(Projects)

  return newProjects
}

async function editProjects(id, Projects) {
  const Projects = await getProjects()

  const editedProjectsIndex = Projects.findIndex(
    (Projects) => Projects.id === id
  )

  if (editedProjectsIndex === -1) {
    return null
  }

  const editedProjects = {
    ...Projects[editedProjectsIndex],
    ...Projects,
    id
  }

 Projects[editedProjectsIndex] = editedProjects

  await saveProjects(Projects)

  return editedProjects
}

async function deleteProjects(id) {
  const Projects = await getProjects()

  const deletedProjectsIndex = Projects.findIndex(
    (Projects) => Projects.id === id
  )

  if (deletedProjectsIndex === -1) {
    return null
  }

  const deletedProjects = {
    ...Projects[deletedProjectsIndex],
    deleted: true
  }

  Projects[deletedProjectsIndex] = deletedProjects

  await saveProjects(Projects)

  return deletedProjects
}

export {
  getProjects,
  getProjectsById,
  createProjects,
  editProjects,
  deleteProjects
}
