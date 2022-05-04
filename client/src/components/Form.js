import React from 'react'
import FileBase from 'react-file-base64'
import './teste.css'

export default function Form() {
  return (
    <div>
      <form autoComplete="off" className="form col s6">
          <div className="input-field">
            <input placeholder="Name" id="name" type="text" className="validate" />
            <label htmlFor="first_name"></label>
          </div>
          <div className="input-field">
            <input placeholder="Title" id="title" type="text" className="validate" />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field">
            <textarea placeholder="Message" id="textarea1" className="materialize-textarea" />
            <label htmlFor="message"></label>
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
