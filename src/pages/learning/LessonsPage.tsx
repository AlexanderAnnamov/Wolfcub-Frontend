import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { ImgCourse } from "../../../assets/img";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const LessonsPage = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Бизнес-аналитика</Text>
      <Text style={styles.textInfo}>
        Бизнес-аналитик собирает, обрабатывает и анализирует информацию,
        связанную с работой бизнеса: доходы, расходы, продажи, количество
        задействованных в процессах сотрудников. Бизнес-аналитики нужны не
        только в IT, но и в компаниях, которые занимаются металлургией,
        финансами, медициной, строительством. Везде бизнес-аналитик старается
        сделать так, чтобы область функционировала максимально эффективно.
        Специалист работает с крупными компаниями, в которых много сложных
        процессов с привлечением большого количества людей, материальных или
        финансовых ресурсов. В малом бизнесе для бизнес-аналитика недостаточно
        задач. На русскоязычном рынке труда задачи бизнес- и системных
        аналитиков зачастую пересекаются, если компания небольшая или нет
        ресурсов оплачивать обоих специалистов. Поэтому стоит изучать каждую
        вакансию, а не смотреть только на заголовки.
      </Text>
      <Image style={styles.img} source={ImgCourse} />
      <Text style={styles.textInfo}>
        Требования к знаниям бизнес-аналитика могут отличаться от компании к
        компании. Чаще всего от специалиста ждут экспертности в следующих
        сферах:
     
      </Text>
      <Text> ● Разработка ПО. Понимание процессов в разработке ПО — ключевое
        знание для бизнес-аналитика, так как он работает на стыке бизнеса и IT.</Text>
        <Text> ● SQL. Бизнес-аналитику желательно владеть языком поисковых запросов
        хотя бы на базовом уровне.</Text>
        <Text> ● Excel или гугл-таблицы. В них заказчики
        часто хранят данные, поэтому обычно бизнес-аналитик делает расчёты
        именно там. Ещё в Excel можно составлять графики и диаграммы, а с
        надстройкой VBA — делать быстрый срез по собранным данным. </Text>
        <Text> ● Нотации
        построения бизнес-процессов. Чаще всего это BPML, в госучреждениях
        бывает EPS. Плюсом будет знание UML — языка моделирования
        бизнес-процессов.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    width: windowWidth,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 25,
  },
  textInfo: {
    textAlign: "justify",
  },
  img: {
    height: 300,
    width: "100%",
    borderRadius: 15,
  },
});
