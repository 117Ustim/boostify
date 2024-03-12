import React, { useState } from "react";
import Email_img from '../../../../img/header/3d-envelope.svg'

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.scss";

export default function BasicModal({ text }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{text}</div>

      <Modal open={open} onClose={handleClose}>
        <div className="modal">
          <div className="block">
            <div className="request ">
              <div className="modal_input ">
                <div className="title ">Request</div>
                <div className="block_input ">
                  <div className="input_name">Name</div>
                  <input className="input" placeholder="Name"></input>
                  <div className="input_name">Email</div>
                  <input className="input" placeholder="Email"></input>
                  <div className="input_name">Servise</div>
                  <input className="input" placeholder="Other"></input>
                  <div className="input_name  ">Details</div>
                  <input
                    className="input wide"
                    placeholder="Provide your business details"
                  ></input>

                  <button className="button">Submit</button>
                </div>
              </div>
            </div>
            <div className="images ">
              <img src={Email_img}alt="Email"/>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
