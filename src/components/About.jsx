import React from "react";
import note_writing from "./note_writing.png";

const about = () => {
  return (
    <div>
      <div className="container col-xl-10 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={note_writing} className="d-block mx-lg-auto img-fluid" alt="note writing" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">MyKeeper: Your Personal Note-Taking Assistant</h1>
            <p className="lead">"MyKeeper" is a user-friendly and efficient note-taking app that is designed to help you capture, organize and remember everything.</p>
            <p className="lead">It also allows users to add tags to their notes, making it easy to find them later. The app syncs notes across all devices, so you can access your notes from anywhere, at any time. With the ability to edit or delete notes, "MyKeeper" is perfect for anyone looking for a personal note-taking solution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
