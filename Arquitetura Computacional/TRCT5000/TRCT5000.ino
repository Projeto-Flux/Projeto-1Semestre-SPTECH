int sensor = 7;
int leitura;
int soma;

void setup() {
Serial.begin(9600);
pinMode(sensor, INPUT);
}

void loop() {
  leitura = map(digitalRead(sensor), 1, 0, 0, 1);
  Serial.println(leitura);
  delay(500);
}
                  