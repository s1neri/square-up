const getIdFromTitle = (title) => {
  return title
    .toLocaleString()
    .replaceAll(' ', '-')
}

export default getIdFromTitle