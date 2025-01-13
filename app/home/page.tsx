"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faServer,
  faPrint,
  faFloppyDisk,
  faPhone,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./home.scss";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import Link from "next/link";

function Home() {
  // Liste des partenaires
  const partners = [
    "ebp.webp",
    "dell.webp",
    "stormshield.webp",
    "3cx.webp",
    "vmware.webp",
    "lenovo.webp",
    "oxatis.webp",
    "kyocera.webp",
  ];

  const iconWidth = 150;
  const iconSpacing = 95;
  const totalWidth = partners.length * (iconWidth + iconSpacing);
  const speed = totalWidth / 0.5;

  return (
    <main className="card_home_page">
      <div className="container">
        <section className="home_container_both">
          <div className="home_container_left_side">
            <div className="left_top_side">
              <Image
                className="device_sli"
                alt="Logo Solution Logique Informatique"
                src="/assets/sli.webp"
                width={300}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
            <div className="left_bot_side">
              <h1>Bienvenue chez Solution Logique</h1>
              <h2>Qui sommes-nous ?</h2>
              <p>
                L’équipe de <span>Solution Logique</span> est à{" "}
                <span>votre écoute</span> pour réaliser vos projets
                informatiques.
              </p>
              <p>
                Depuis <span>plus de 30 ans</span>, nous avons toujours voulu
                marquer <span>notre volonté</span>, d’une forte implantation
                locale en Rhône-Alpes.
              </p>
            </div>
          </div>
          <div className="home_container_right_side">
            <h1>Apporteur de solution informatique</h1>
            <p>
              Intégrateur de solutions complètes et prestataire de services en
              conseils informatiques, nous innovons quotidiennement pour les
              PME, PMI, TPE, indépendants, collectivités et associations.
            </p>
            <Image
              className="img_right_side"
              alt="Solution Informatique"
              src="/assets/solution.webp"
              width={400}
              height={300}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
        </section>
      </div>
      <div className="home_banner_bot">
        <div className="container">
          <section className="our_expertise">
            <h1>Notre expertise</h1>
            <h2>Découvrez nos solutions</h2>
            <h3>
              Une équipe expérimentée, des collaborateurs diplômés et certifiés,
              une exigence reconnue pour vous assurer une qualité de service
              professionnel. Nos techniciens ont la mission de renforcer la
              performance de votre système informatique et de protéger votre
              environnement de travail.
            </h3>
          </section>
          <section className="home_services">
            {[
              {
                icon: faComputer,
                title: "Matériels Informatique",
                text: "Optez pour une solution sur mesure",
              },
              {
                icon: faServer,
                title: "Virtualisation & Serveur",
                text: "Gérez tout à distance.",
              },
              {
                icon: faPrint,
                title: "Système d'impression",
                text: "Mettez-vous à la page",
              },
              {
                icon: faFloppyDisk,
                title: "Sauvegarde de données",
                text: "Protégez vos données.",
              },
              {
                icon: faPhone,
                title: "Opérateur Télécom",
                text: "Choisissez une téléphonie.",
              },
              {
                icon: faShield,
                title: "Sécurité Informatique",
                text: "Protégez votre système.",
              },
            ].map((service, index) => (
              <div className="home_services_card" key={index}>
                <FontAwesomeIcon
                  className="home_services_icon"
                  icon={service.icon}
                />
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="container">
        <section className="home_conseils_sli">
          <div className="home_conseils_sli_left">
            <Image
              className="img_right_side"
              alt="Assistance télémaintenance"
              src="/assets/assistance.webp"
              width={400}
              height={300}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
          <div className="home_conseils_sli_right">
            <h1>Nous contacter</h1>
            <h2>Besoin d&apos;une aide en télémaintenance ?</h2>
            <p>
              Accédez à la télémaintenance pour que Solution Logique intervienne
              directement sur votre ordinateur.
            </p>

            <Link href="/telemaintenance" className="btn_help btn_help_right">
              Besoin d&apos;aide ?
            </Link>
          </div>
        </section>
        <h1>PARTENAIRE ASSOCIATIF :</h1>
      </div>
      <div className="home_carousel_partner">
        <Swiper
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={speed} 
          loop={true}
          freeMode={true}
          grabCursor={false}
          slidesPerView="auto"
          spaceBetween={iconSpacing}
        >
          {[...partners, ...partners].map((imgSrc, index) => (
            <SwiperSlide key={index} className="partner_slide">
              <Image
                className="device_sli"
                alt={`Logo ${imgSrc}`}
                src={`/assets/${imgSrc}`}
                width={iconWidth}
                height={100}
                style={{
                  width: `${iconWidth}px`,
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default Home;
