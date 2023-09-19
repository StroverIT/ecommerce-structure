export const listOfItems = [
  "home",
  "password",
  "email",
  "fullName",
  "phoneNumber",
  "title",
  "giReturn",
  "trash",
  "hix",
  "settings",
  "rightArrow",
  "address",
  "order",
  "heart",
  "counterClockWise",
  "power",
  "box",
  "user",
  "plusCircle",
  "undefined"
] as const;

export type InputIcons = {
  iconType: (typeof listOfItems)[number];
};
