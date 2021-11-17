import * as React from 'react';

import MainLayout from '../layouts/main';

const AboutPage = () => (
  <MainLayout>
    <article className="py-12">
      <div className="max-w-screen-md mx-auto px-3">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-lg mt-0 mb-4">
          Занимаюсь больше 4 лет Frontend разработкой.
          За свой опыт успел поработать как над мелкими проектами
          (сайты-визитки, интернет магазины и тд),
          так и над крупными решениями (B2B, Back Office, ERP, Dashboards).
          Кроме этого был опыт участия в Backend разработке на Java (Spring) и NodeJS (NestJS).
        </p>

        <p className="text-lg mt-0 mb-4">
          Помимо написания кода по паттернам проектирования, принципам рефакторинга и SOLID пишу "
          <a className="font-bold text-blue" href="https://habr.com/ru/post/484590/">чтобы пацанам было не стыдно показать</a>
          ".
          В добавок к этому использую Джедайские техники (М. Дорофеев)
          для повышения КПД самого себя.
        </p>
        <p className="text-lg mt-0 mb-4" />
        <p className="text-lg mt-0 mb-4" />
        <p className="text-lg mt-0 mb-4" />

        <p className="text-lg mt-0 mb-4">

          Кроме чтения документации стараюсь развиваться как самостоятельно по книжкам, видеоурокам и статьям, так и с помощью курсов повышения квалификации.

          Почему выбрал IT сферу?

          В школьные годы стал замечать, что "точные" науки мне гораздо интереснее, это послужило поступлению в университет на IT направление и, как результат, начало карьеры в этой сфере.

          Чем могу быть полезен?

          Прежде всего, это стремление сделать проект лучше. Считаю неотъемлемой частью внедрение статического анализатора кода, что позволяет привести код не только к единому стилю, но и предотвратить написание "плохого" кода. Никогда не пройду мимо появившегося бага. Либо поправлю сразу либо сообщу о нем. Работаю по правилу бойскаута. Стараюсь как минимум оставить код таким же чистым, как был до меня, или как максимум сделать его лучше.
          Делюсь изученной информацией с коллегами. Считаю это важной частью в процессе развития команды.
          Двумя руками за проведение ревью кода.
          Привнесу в команду дружелюбную атмосферу. Ведь лучшая команда - это не просто коллеги по цеху, но и друзья, которые в любую минуту готовы прийти на помощь.
        </p>

        <figure />

        <h3 className="text-lg mt-12 font-bold">About The Blog</h3>

        <p className="text-lg">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>

        <h3 className="text-lg mt-12 font-bold">My Skills and Experiences</h3>

        <p className="text-lg">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>

        <h3 className="text-lg mt-12 font-bold">Side Projects</h3>

        <p className="text-lg">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>

      </div>
    </article>

  </MainLayout>
);

export default AboutPage;
