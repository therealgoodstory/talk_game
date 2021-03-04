import React from "react";
import SelectComponent from "./select";

const InputTask = () => (
  <form>
    <div className="page__size page__input">
      <span className="font-page page__name">Название задачи*</span>
      <input className="input" />
    </div>
    <div className="page__input">
      <SelectComponent placeholder="Выберите тип работ" name="Тип работ" />
    </div>
    <div className="page__atribute">
      <SelectComponent placeholder="" name="Атрибут" />
      <SelectComponent placeholder="" name="Атрибут" />
      <SelectComponent placeholder="" name="Атрибут" />
    </div>
    <div className="page__input">
      <span className="page__name">Описание</span>
      <textarea className="textarea" />
    </div>
  </form>
);
export default InputTask;
