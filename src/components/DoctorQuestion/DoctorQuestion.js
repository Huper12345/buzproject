import React from "react";
import "./DoctorQuestion.scss";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from 'react-toastify';
import { ArrowIcon } from "../WhenBuy/ArrowIcon";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../helpers/components/Title";


export const DoctorQuestion = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [textAreaText, setTextArea] = useState("");

  const [inputClass, setInputClass] = useState("Question-Input");
  const [textAreaClass, setTextAreaClass] = useState("Question-Message");
  

  const form = useRef();

  const NotifyYesDoctor = "custom-id-yes-Doctor";
  const NotifyNoDoctor = "custom-id-no-Doctor";

  const switchFormClass = () => {
    setInputClass("Question-Input inputBorderGreen");
    setTextAreaClass("Question-Message textAreaBorderGreen")
  } 

  const notifySucsesfullyDoctor = () => {
      toast.success("Успешно отправлено", {
        toastId: NotifyYesDoctor,  
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        });
  
  }

  const notifyFailedDoctor = () => {
      toast.error("Что-то пошло не так...", {
        toastId: NotifyNoDoctor,   
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        });
  }

  const nameSelect = (e) => {
    setNameText(e.target.value);
  };

  const emailSelect = (e) => {
    setEmailText(e.target.value);
  };

  const textAreaSelect = (e) => {
    setTextArea(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        "service_9o1c5od",
        "template_9p7rqzs",
        form.current,
        "xwxZOtNhLJnvYzocm"
      )
      .then(
        (result) => {
            notifySucsesfullyDoctor();
            setTextArea("");
            setEmailText("");
            setNameText("");
        },
        (error) => {
            notifyFailedDoctor();
            setTextArea("");
            setEmailText("");
            setNameText("");
        }
      );
  };

  return (
    <div className="DoctorQuestion-Container" id="DoctorQuestion">
      <div className="container white-back">
        <div className="Doctor-Question-Inner">
        <div className="Doctor-Question-Text-Wrapper">
          <Title 
          TitleText="Остались вопросы?"
          TitleColor="Title-Text title-fontsize32"
          />
          <div className="WhenBuy-text forQuestion">
              <div className="WhenBuy-Text-Content forQuestion">
                <div className="Buy-Text-Title">Наш специалист ответит на все интересующие Вас вопросы, просто заполните  
                  <span className="Buy-Subtile-Additional"> форму</span>
                </div>
              </div>
              <button
              onClick={switchFormClass}
               className="Order-Button">
              Заполнить
              <ArrowIcon />
              </button>

            </div>

           </div>
          <div className="Doctor-Question-Content">
            <form
              onSubmit={sendEmail}
              ref={form}
              id="Question-Form"
              className="Question-Form"
            >
              <input
                required
                type="text"
                placeholder="Ваше имя"
                className={inputClass}
                name="name"
                value={nameText}
                onChange={nameSelect}
              ></input>
              <input
                required
                type="email"
                placeholder="Email-адрес"
                className={inputClass}
                name="email"
                value={emailText}
                onChange={emailSelect}
              ></input>
              <textarea
                required
                placeholder="Ваш вопрос"
                name="message"
                className={textAreaClass}
                value={textAreaText}
                onChange={textAreaSelect}
              ></textarea>
            </form>
            <button 
            className="Doctor-Question-Button"
            form="Question-Form"
            >Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
