// Seating arrangement data
const seatingData = [
  // Table 01
  { name: "Sadeev Silva", table: 1, seat: 1 },
  { name: "Haleem Thassim", table: 1, seat: 2 },
  { name: "Pragatheesh Rajenthriam", table: 1, seat: 3 },
  { name: "Malinda Gunasekara", table: 1, seat: 4 },
  { name: "Eshani Samarakoon", table: 1, seat: 5 },
  { name: "Sanju Kaldera", table: 1, seat: 6 },
  { name: "Sachini Ekanayake", table: 1, seat: 7 },
  { name: "Rushan Arachchige", table: 1, seat: 8 },

  // Table 02
  { name: "Milan Widanage", table: 2, seat: 1 },
  { name: "Mahinsa Jayawickrama", table: 2, seat: 2 },
  { name: "Aadil Azwer", table: 2, seat: 3 },
  { name: "Dashnika Madhuwanthi", table: 2, seat: 4 },
  { name: "Yoga Milona", table: 2, seat: 5 },
  { name: "Malsha Nirmani", table: 2, seat: 6 },
  { name: "Subavi Laknara", table: 2, seat: 7 },
  { name: "Ayodhaya Milroy", table: 2, seat: 8 },

  // Table 03
  { name: "Inusha Umayantha", table: 3, seat: 1 },
  { name: "Menuka Ranasinghe", table: 3, seat: 2 },
  { name: "Mohamed Nawaz", table: 3, seat: 3 },
  { name: "Nandika Anupama", table: 3, seat: 4 },
  { name: "Dulmini Hasinika", table: 3, seat: 5 },
  { name: "Lakma Sanjula", table: 3, seat: 6 },
  { name: "Hashani Hewagama", table: 3, seat: 7 },
  { name: "Udeshika Kariyapperuma", table: 3, seat: 8 },

  // Table 04
  { name: "Dulan Madurasinghe", table: 4, seat: 1 },
  { name: "Mohammed Rishan", table: 4, seat: 2 },
  { name: "Anjana Sachintha", table: 4, seat: 3 },
  { name: "Osanda Senanayake", table: 4, seat: 4 },
  { name: "Anjani De Silva", table: 4, seat: 5 },
  { name: "Fathima Akhila", table: 4, seat: 6 },
  { name: "Chanuli Fernando", table: 4, seat: 7 },
  { name: "Vinodani Madumali", table: 4, seat: 8 },

  // Table 05
  { name: "Nushath Simark", table: 5, seat: 1 },
  { name: "Gihan Yatawatte", table: 5, seat: 2 },
  { name: "Pasindu Maddumage", table: 5, seat: 3 },
  { name: "Salaru Prathibha", table: 5, seat: 4 },
  { name: "Kithdanani Jayasekara", table: 5, seat: 5 },
  { name: "Anuththara Jayasekara", table: 5, seat: 6 },
  { name: "Waseema Waseem", table: 5, seat: 7 },
  { name: "Vinodani Madumali", table: 5, seat: 8 },

  // Table 06
  { name: "Samith Alwis", table: 6, seat: 1 },
  { name: "Pahan Hettiarachchi", table: 6, seat: 2 },
  { name: "Chandratheebam Yuwan", table: 6, seat: 3 },
  { name: "Kushani Wijesinghe", table: 6, seat: 4 },
  { name: "Nelum Maduwanthi", table: 6, seat: 5 },
  { name: "Kasuni Wimalasena", table: 6, seat: 6 },
  { name: "Tharuka Gunasekara", table: 6, seat: 7 },
  { name: "Reserved", table: 6, seat: 8 },

  // Table 07
  { name: "Yohan Madusanka", table: 7, seat: 1 },
  { name: "Vimukthi Pathirana", table: 7, seat: 2 },
  { name: "Gawesha Fernando", table: 7, seat: 3 },
  { name: "Dayan Sankalpa", table: 7, seat: 4 },
  { name: "Rochell Mystica", table: 7, seat: 5 },
  { name: "Manisha Jayasinghe", table: 7, seat: 6 },
  { name: "Maduri Suriyarachchi", table: 7, seat: 7 },
  { name: "Ashini Gunasekara", table: 7, seat: 8 },
];

// Get total number of tables
const totalTables = 7;
