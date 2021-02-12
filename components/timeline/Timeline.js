import React from 'react'
import Description from './Description'


function Timeline() {
  return (
      <div className="timeline">
        <div className="header">
          <img src="/img/logo-itb.png" />
          <p>itb1920</p>
        </div>
        <div className="body">
          <img src="/img/umkm.jpg" />
        </div>
        <div className="main-btn">
          <img src="/img/like.svg" />
          <img src="/img/comment.svg" />
          <img src="/img/donate.svg" style={{width: "2rem"}}/>
          <p>500 likes</p>
        </div>
        <div className="campaign-desc">
          <h3>Tanam modal untuk UMKM Pak Ali</h3>
          <p>
            Pak Ali adalah seorang pedagang kecil di daerah Blitar Jawa Timur. 
            Beliau setiap hari pergi ke pasar untuk menjual aneka hasil bumi.
            <br />
            <br />
            UMKM Pak Ali sangat menjanjikan karena tiap hari usaha beliau selalu habis dan laris.
            Segera tanam modal untuk UMKM Pak Ali dan dapatkan intrest rate yang tinggi.
          </p>
        </div>
        <div className="desc">
          <Description title="Target" text="Rp 3.000.000" img="/img/target.svg" />
          <Description title="Progress" text="2 Hari Lagi" img="/img/goal.svg" />
        </div>
        <div className="desc">
          <Description title="Partisipasi" text="300 Orang" img="/img/collaboration.svg" />
          <Description title="Terkumpul" text="Rp 2.000.000" img="/img/wallet.svg" />
        </div>

        <style jsx>
          {`
            .timeline {
              display: flex;
              flex-direction: column;
              margin: 0 auto;
              margin-top: 4rem;
              width: 40%;
              background: rgba(255,255,255, 0.2);
              padding: 1rem 1rem 2rem 1rem;
              backdrop-filter: blur(40px);
              border: solid 2px transparent;
              background-clip: padding-box;
              box-shadow: 10px 10px 10px  rgba(46, 54, 68, 0.03);
            }

            .header img {
              width: 2rem;
            }

            .header p {
              margin-left: 0.5rem;
              position: relative;
            }

            .header img, .header p {
              display: inline-block;
            }

            .body img {
              width: 100%;
              margin-top: 1rem;
            }

            .main-btn img {
              display: inline-block;
              width: 1.5rem;
              margin-right: 0.5rem;
              cursor: pointer;
            }

            .main-btn img:hover {
              opacity: 0.5;
            }

            .desc {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 1rem;
            }

            .campaign-desc {
              padding: 1rem;
              width: 100%;
              box-shadow: 10px 10px 10px  rgba(46, 54, 68, 0.2);
            }

            .campaign-desc h3 {
              margin-block-end: 0.5rem;
            }
          `}
        </style>
      </div>
  )
}

export default Timeline
