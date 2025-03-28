import React, { FC } from "react";
import { Map } from "src/page-components/home/Map";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Lab1: FC = () => (
  <PageWrapper mainClassName="pt-25 pb-10">
    <section className="container flex flex-col gap-10">
      <h1 className="text-center">Лабораторна робота № 1.</h1>

      <h2 className="text-center">
        РОЗРОБКА ІНФОРМАЦІЙНО-ДОВІДКОВОЇ СИСТЕМИ ДЛЯ ЕКСПЕРТІВ У ГАЛУЗІ
        КОМПЛЕКСНОГО АНАЛІЗУ СТАНУ ТЕРИТОРІЇ
      </h2>

      <p className="rounded-lg bg-white p-4">
        <strong>Мета роботи:</strong> Отримати практичні навички по збору та
        класифікації інформації, а також по розробці спеціалізованих
        інформаційно-довідкових систем.
        <br />
        <br />
        <strong> Завдання:</strong> Студенти мають обрати 10 об’єктів
        промисловості, відобразити на карті вибрані об’єкти, визначити який
        вплив вони справляють на оточуюче середовище, визначити, в яких
        підсистемах моніторингу вони приймають участь, зібрати інформацію по
        еко-енергоекономічним параметрам по кожному об’єкту, реалізувати
        відображення даних по об’єктам через взаємодію з інтерактивною картою.
      </p>

      <Map />
    </section>
  </PageWrapper>
);

export default Lab1;
