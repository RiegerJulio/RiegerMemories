import React from 'react'
import FileBase from 'react-file-base64'
import './teste.css'

export default function Form() {
  return (
    <div>
      <form autoComplete="off" className="form col s6">
          <div className="input-field">
            <input id="name" type="text" className="validate" />
            <label htmlFor="first_name">Name</label>
          </div>
          <div className="input-field">
            <input id="title" type="text" className="validate" />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea id="textarea1" className="materialize-textarea" />
            <label htmlFor="message">Message</label>
          </div>
          <div className="file-button">
            <label className="btn waves-effect waves-light col s12">
              Choose File
              <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => console.log(base64)}
              />              
            </label>
          </div>
          <button className="btn waves-effect waves-light col s12" type="submit" name="action">Submit</button>
      </form>
    </div>
  )
}
