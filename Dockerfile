FROM openjdk:17-bullseye as build

WORKDIR /spring-service

COPY .mvn ./.mvn
COPY mvnw .
COPY pom.xml .
COPY src ./src

RUN ./mvnw install -DskipTests
RUN cp ./target/*.jar app.jar

FROM openjdk:17-bullseye

WORKDIR /spring-service
COPY --from=build /spring-service/app.jar .

ENTRYPOINT ["java", "-jar", "./app.jar"]
