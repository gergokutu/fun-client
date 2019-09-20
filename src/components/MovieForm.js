import React from 'react'

export default function MovieForm() {
  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Poster URL:
        <input type="text" name="posterUrl" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}