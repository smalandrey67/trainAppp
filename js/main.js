const mainBlock = document.querySelector(".train__inner")
// monday-of-train
const monday = new CardOfTrain("Понедельник:", "images/image-1.jpg", "Жим штанги лежа: 40-50кг")
mainBlock.append(monday.draw())

const mondayExercises = new CardOfTrain("Сразу же", "images/image-2.jpg", "Французский жим штанги: 10-20кг. Отдых (2-3 мин). Пресс")
mainBlock.append(mondayExercises.draw())

const mondaySecondExercises = new CardOfTrain("Второе упражнения:", "images/image-3.jpg", "Жим гантелями лежа: 12-14кг")
mainBlock.append(mondaySecondExercises.draw())

const mondaySecondExercisesImmediately = new CardOfTrain("Сразу же", "images/image-4.jpg", "Сгибание рук на скамье Скотта: 8-10кг. Пресс")
mainBlock.append(mondaySecondExercisesImmediately.draw())

const mondayThirdExercises = new CardOfTrain("Третье упражнения:", "images/image-5.jpg", "Разгибания на блоке: 20-30кг")
mainBlock.append(mondayThirdExercises.draw())

const mondayThirdExercisesImmediately = new CardOfTrain("Сразу же", "images/image-6.png", "Бицепс на скамье скотта: 10-20кг. Пресс")
mainBlock.append(mondayThirdExercisesImmediately.draw())

const wednesday = new CardOfTrain("Среда:", "images/image-7.jpg", "Жим штанги лежа: 12-14кг")
mainBlock.append(wednesday.draw())

const wednesdayExercises = new CardOfTrain("Сразу же:", "images/image-8.jpg", "Разгибания рук над головой: 9-10кг. Пресс")
mainBlock.append(wednesdayExercises.draw())

const wednesdaySecondExercises = new CardOfTrain("Второе упражнения:", "images/image-9.jpg", "Жим штанги стоя: 10-20кг")
mainBlock.append(wednesdaySecondExercises.draw())

const wednesdaySecondExercisesImmediately  = new CardOfTrain("Сразу же:", "images/image-10.jpg", "Жим штанги стоя: 10-20кг. Пресс")
mainBlock.append(wednesdaySecondExercisesImmediately.draw())

const wednesdayThirdExercises  = new CardOfTrain("Третье упражнения:", "images/image-11.jpg", "Развод гантелями в стороны: 8-9кг")
mainBlock.append(wednesdayThirdExercises.draw())

const wednesdayThirdExercisesImmediately  = new CardOfTrain("Сразу же:", "images/image-12.jpg", "Молотки c гантелями 9-10кг. Пресс")
mainBlock.append(wednesdayThirdExercisesImmediately.draw())

const friday = new CardOfTrain("Пятница:", "images/image-13.jpg", "Тяга верхнего блока. 30-40кг:")
mainBlock.append(friday.draw())

const fridayExercises = new CardOfTrain("Сразу же:", "images/image-14.jpg", "Сгибание/разгибание ног на тренажере 20-30кг. Пресс")
mainBlock.append(fridayExercises.draw())

const fridaySecondExercises= new CardOfTrain("Второе упражнения:", "images/image-15.jpg", "Тяга верхнего блока за голову 30-40кг:")
mainBlock.append(fridaySecondExercises.draw())

const fridaySecondExercisesImmediately = new CardOfTrain("Сразу же:", "images/image-16.jpg", "Подьем штанги на бицепс 10-15кг. Пресс")
mainBlock.append(fridaySecondExercisesImmediately.draw())

const fridayThirdExercises = new CardOfTrain("Третье упражнения:", "images/image-17.jpg", "Тяга штанги к поясу 10-20кг:")
mainBlock.append(fridayThirdExercises.draw())

const fridayThirdExercisesImmediately = new CardOfTrain("Сразу же:", "images/image-18.jpg", "Трицепс на скамье с гантелей 7-8кг. Пресс")
mainBlock.append(fridayThirdExercisesImmediately.draw())








