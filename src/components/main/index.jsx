import React from "react";
import Button from "../button";
import Card from "../card";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <Button btnText="Main Button" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        sapiente, eligendi labore provident necessitatibus aspernatur repellat
        qui totam, iusto architecto nam perferendis, porro harum quis culpa
        temporibus impedit. Laudantium consequatur quisquam explicabo nihil,
        iusto sit mollitia sunt deleniti officia assumenda corrupti neque
        provident accusamus voluptates repellat hic deserunt facilis officiis,
        modi praesentium voluptatibus ullam dolorem fugit? Perspiciatis
        molestiae dolorum animi distinctio quo! Dolorum quidem nesciunt dolorem
        at beatae voluptates eum deleniti doloremque officia, est rerum tempora
        assumenda doloribus quas, fuga corporis molestias natus officiis
        accusantium voluptatem! Minus voluptatem blanditiis sapiente excepturi
        suscipit aperiam ullam reprehenderit tempora. Nisi ratione tempore autem
        saepe eligendi dolorum. Sed quam harum vel necessitatibus magnam unde
        libero? Voluptatum dolorum, dolorem doloribus, iste hic incidunt
        accusantium consequuntur aliquam quis harum numquam eum eius quasi
        explicabo quos consectetur distinctio expedita saepe! Quia amet ipsam
        repellat voluptatum dolore sed tempore autem, reiciendis beatae veniam
        rerum, libero consequuntur quo fuga.
      </p>
    </div>
  );
}
