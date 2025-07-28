import React, { useState, useEffect } from "react";

const UserCard = () => {
  const defaultName = "Иван Иванов";
  const [userName, setUserName] = useState(defaultName);
  const [displayName, setDisplayName] = useState(defaultName);
  const [isConfirmed, setIsConfirmed] = useState(true);

  useEffect(() => {
    console.log(`Имя пользователя изменено на: ${userName}`);
  }, [userName]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    setDisplayName(userName);
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setUserName(defaultName);
    setDisplayName("");
    setIsConfirmed(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
      }}
    >
      <h2>Карточка пользователя</h2>
      <div style={{ margin: "10px 0" }}>
        <label htmlFor="nameInput">Имя: </label>
        <input
          id="nameInput"
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={{ padding: "5px" }}
        />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button
          onClick={handleConfirm}
          disabled={isConfirmed}
          style={{
            padding: "5px 10px",
            backgroundColor: isConfirmed ? "#d0d0d0" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isConfirmed ? "default" : "pointer",
          }}
        >
          Подтвердить
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #999",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Сбросить
        </button>
      </div>
      <div style={{ marginTop: "15px" }}>
        <strong>Текущее имя:</strong> {displayName || "не указано"}
      </div>
    </div>
  );
};

export default UserCard;