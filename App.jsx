import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    const top = Math.random() * 80 + 10;
    const left = Math.random() * 80 + 10;
    setNoButtonPos({ top: `${top}%`, left: `${left}%` });
  };

  return (
    <div className="app">
      {step === 0 && (
        <div className="box">
          <p>Boleh aku bilang sesuatu kekamu?</p>
          <button onClick={() => setStep(1)}>Boleh</button>
          <button
            style={{
              position: "absolute",
              top: noButtonPos.top,
              left: noButtonPos.left,
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            Engga usah
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="box">
          <p>
            Aku juga tau kok jawaban kamu sebenarnya, cuman aku ingin bilang
            kekamu..
          </p>
          <button onClick={() => setStep(2)}>Iyaa?</button>
        </div>
      )}

      {step === 2 && (
        <div className="box long-text">
          <p>
            Terimaa kasih sudah mau kenalan sama akuu, aku jujur bersyukur
            banget bisa kenal banget sama kamu, aku seberuntung itu bisa melihat
            kamu secara langsung di rl, bahkan kamu mau aja nemenin aku main
            bareng hehehe, makasii banyaakk yaaa, dan aku mau bilang sesuatu
            kekamu, ini sebenarnya pengen ku pendem aja karena mungkin aku sudah
            mengetahui jawabannyaa ╥﹏╥. ternyata aku engga bisa selalu mendem
            perasaan aku maaf yahh aku pasti sangat merepotkanmu.. maaff bangett,
            aku minta maaf sedalam dalamnya, aku ingin jujur sama perasaanku
            cuman kadang aku ragu meski aku sudah tau.. baiklahh aku akan jujurr
            sekarang...
          </p>
          <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
            NORA SIHALOHO
          </p>
          <p>
            aku sangat menyukaimu dan aku benar benar mencintaimu, maaff bangett
            aku merepotkanmu kali ini maaff yaa.. (◞‸◟ㆀ) terimaa kasihh yaa udah
            mau baca text panjang engga jelas gini huhuhuhu, sekali lagi aku
            minta maaf sedalam dalamnya, dan terima kasihh..
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
