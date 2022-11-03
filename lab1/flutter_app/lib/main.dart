import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFF2D8577),
          title: const Text("Flutter example"),
        ),
        body: Column(children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
              child: ClipOval(
                child: SizedBox.fromSize(
                  size: Size.fromRadius(70),
                  child: Image.asset(
                    "./images/dog.jpeg",
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
          GridView.count(
            primary: false,
            padding: EdgeInsets.fromLTRB(60, 30, 60, 30),
            crossAxisCount: 2,
            crossAxisSpacing: 100,
            childAspectRatio: (3 / 1),
            mainAxisSpacing: 25,
            shrinkWrap: true,
            children: [
              ElevatedButton(
                  style: ButtonStyle(
                      backgroundColor: const MaterialStatePropertyAll<Color>(
                          Color(0xFFD6D7D7))),
                  onPressed: () {},
                  child: const Text(
                    "BUTTON",
                    style: TextStyle(fontSize: 14, color: Colors.black),
                  )),
              ElevatedButton(
                  style: ButtonStyle(
                      backgroundColor: const MaterialStatePropertyAll<Color>(
                          Color(0xFFD6D7D7))),
                  onPressed: () {},
                  child: const Text(
                    "BUTTON",
                    style: TextStyle(fontSize: 14, color: Colors.black),
                  )),
              ElevatedButton(
                  style: ButtonStyle(
                      backgroundColor: const MaterialStatePropertyAll<Color>(
                          Color(0xFFD6D7D7))),
                  onPressed: () {},
                  child: const Text(
                    "BUTTON",
                    style: TextStyle(fontSize: 14, color: Colors.black),
                  )),
              ElevatedButton(
                  style: ButtonStyle(
                      backgroundColor: const MaterialStatePropertyAll<Color>(
                          Color(0xFFD6D7D7))),
                  onPressed: () {},
                  child: const Text(
                    "BUTTON",
                    style: TextStyle(fontSize: 14, color: Colors.black),
                  )),
            ],
          ),
          Row(
            children: const [
              Padding(
                padding: EdgeInsets.fromLTRB(20, 0, 10, 0),
                child: Text("Email"),
              ),
              Expanded(
                  child: Padding(
                padding: EdgeInsets.fromLTRB(0, 0, 60, 0),
                child: TextField(
                  autocorrect: false,
                  keyboardType: TextInputType.emailAddress,
                  cursorColor: Color(0xFFCD1B61),
                  decoration: InputDecoration(
                      enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Color(0xFFCD1B61))),
                      focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Color(0xFFCD1B61)))),
                ),
              ))
            ],
          )
        ]),
      ),
    );
  }
}
