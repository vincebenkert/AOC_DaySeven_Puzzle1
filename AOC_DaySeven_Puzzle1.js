//    O-------O  O-------O  O-------O  O-------O  O-------O
//0 ->| Amp A |->| Amp B |->| Amp C |->| Amp D |->| Amp E |-> (to thrusters)
//    O-------O  O-------O  O-------O  O-------O  O-------O

var inputArray1 = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 46, 59, 80, 105, 122, 203, 284, 365, 446, 99999, 3, 9, 102, 3, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 1001, 9, 3, 9, 102, 4, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 1002, 9, 3, 9, 1001, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 1001, 9, 2, 9, 102, 4, 9, 9, 101, 3, 9, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 101, 4, 9, 9, 102, 3, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99];

// Max thruster signal 43210 (from phase setting sequence 4,3,2,1,0)
const inputArray2 = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0]; //passed

// Max thruster signal 54321 (from phase setting sequence 0,1,2,3,4):
const inputArray3 = [3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23, 101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0]; //passed

//Max thruster signal 65210 (from phase setting sequence 1,0,4,3,2):
const inputArray4 = [3, 31, 3, 32, 1002, 32, 10, 32, 1001, 31, -2, 31, 1007, 31, 0, 33, 1002, 33, 7, 33, 1, 33, 31, 31, 1, 32, 31, 31, 4, 31, 99, 0, 0, 0]; //passed

const sequenceArray = ["01234","01243","01324","01342","01423","01432","02134","02143","02314","02341","02413","02431","03124","03142","03214","03241","03412","03421","04123","04132","04213","04231","04312","04321","10234","10243","10324","10342","10423","10432","12034","12043","12304","12340","12403","12430","13024","13042","13204","13240","13402","13420","14023","14032","14203","14230","14302","14320","20134","20143","20314","20341","20413","20431","21034","21043","21304","21340","21403","21430","23014","23041","23104","23140","23401","23410","24013","24031","24103","24130","24301","24310","30124","30142","30214","30241","30412","30421","31024","31042","31204","31240","31402","31420","32014","32041","32104","32140","32401","32410","34012","34021","34102","34120","34201","34210","40123","40132","40213","40231","40312","40321","41023","41032","41203","41230","41302","41320","42103","42130","42301","42310","43012","43021","43102","43120","43201","43210"];

const sequenceArray1 = ["01234","12430","10432","43210"]; //test set



var copiedArray = inputArray1.concat();




var posToReplace = 0;
var valPositionOne = 0;
var valPositionTwo = 0;
var currentPos = 0;
var evaluated = false;
var input = 5;
var optCode;
var output = 0;
var total = 0;

var parameterOne = "0";
var parameterTwo = "0";
var parameterThree = "0";
var parameterFour = "0";

var phaseSettingAmpA = 1;
var phaseSettingAmpB = 0;
var phaseSettingAmpC = 4;
var phaseSettingAmpD = 3;
var phaseSettingAmpE = 2;


function breakdown(optCode) {
  //breakdown individual to get optcodes / parameter modes

  var newoptCode = optCode.toString();
  //console.log("Current optCode = " + optCode);
  var newoptCodeLength = newoptCode.length;

  if (newoptCode[newoptCodeLength - 3])
    parameterOne = newoptCode[newoptCodeLength - 3];

  if (newoptCode[newoptCodeLength - 4])
    parameterTwo = newoptCode[newoptCodeLength - 4];

  if (newoptCode[newoptCodeLength - 5])
    parameterThree = newoptCode[newoptCodeLength - 5];

  if (newoptCode[newoptCodeLength - 6])
    parameterFour = newoptCode[newoptCodeLength - 6];

  if (newoptCodeLength > 1)
    optCode = newoptCode[newoptCodeLength - 2] + newoptCode[newoptCodeLength - 1];
  else
    optCode = "0" + newoptCode[newoptCodeLength - 1];

  return optCode;
}

function updateParameterModes(currentPos, inputArray, currentOptCode) {
  //Update parameter modes based on current instruction,  used in eval of instruction set.
  if (parameterOne == "0")
    valPositionOne = inputArray[currentPos + 1];
  else
    valPositionOne = currentPos + 1;

  if (parameterTwo == "0")
    valPositionTwo = inputArray[currentPos + 2];
  else
    valPositionTwo = currentPos + 2;

  if (currentOptCode == "03") {
    if (parameterOne == "0")
      posToReplace = inputArray[currentPos + 1];
    else
      posToReplace = currentPos + 1;
  } else {
    if (parameterThree == "0")
      posToReplace = inputArray[currentPos + 3];
    else
      posToReplace = currentPos + 3;
  }


}

function intCodeComputer(inputArray) {
  //Breakdown OptCode / Parameters...
  optCode = breakdown(inputArray[currentPos]);
  updateParameterModes(currentPos, inputArray, optCode);

  while (optCode != "99") {
    //console.log("What is the current position? = " + currentPos);

    switch (optCode) {

      case "01":
        //console.log("made it to 1 switch");
        inputArray[posToReplace] = inputArray[valPositionOne] + inputArray[valPositionTwo];
        currentPos = currentPos + 4;
        break;

      case "02":
        //console.log("made it to 2 switch");
        inputArray[posToReplace] = inputArray[valPositionOne] * inputArray[valPositionTwo];
        currentPos = currentPos + 4;
        break;

      case "03":
        //console.log("made it to 3 switch");
        inputArray[posToReplace] = input;
        //console.log("Position to replace... " + posToReplace);
       // console.log("Current input = " + inputArray[posToReplace]);
        input = output; //After initial it needs value of zero to start then previous runs output.
        currentPos = currentPos + 2;
        break;

      case "04":
        console.log("...OUTPUT TIME....");
        if (parameterOne == "1") {
          output = inputArray[currentPos + 1];
          console.log("Current output = " + output);
        }
        if (parameterOne == "0") {
          valPositionOne = inputArray[currentPos + 1];
          output = inputArray[valPositionOne];
          console.log("Current output = " + output);
        }
        currentPos = currentPos + 2;
        break;

      case "05":
        //console.log("made it to 5 switch");
        if (inputArray[valPositionOne] != 0)
          //if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter...
          currentPos = inputArray[valPositionTwo];
        else
          currentPos = currentPos + 3;

        break;

      case "06":
        //console.log("made it to 6 switch");

        if (inputArray[valPositionOne] == 0)
          //if the first parameter is zero, it sets the instruction pointer to the value from the second parameter.
          currentPos = inputArray[valPositionTwo];
        else
          currentPos = currentPos + 3;
        break;

      case "07":
        //console.log("made it to 7 switch");
        if (inputArray[valPositionOne] < inputArray[valPositionTwo])
          inputArray[posToReplace] = 1;
        else
          inputArray[posToReplace] = 0;

        currentPos = currentPos + 4;

        break;

      case "08":
        //console.log("made it to 8 switch");
        if (inputArray[valPositionOne] == inputArray[valPositionTwo])
          inputArray[posToReplace] = 1;
        else
          inputArray[posToReplace] = 0;

        currentPos = currentPos + 4;
        break;
      case "99":
        evaluated = true;
        console.log("Thruster Program finished...");
        break;


      default:
        console.log("Ava... we have a problem...");
        break;
    }



    if (evaluated == true)
      break;



    //console.log("still going...");
    //Resetting Parameters to 0s
    parameterOne = "0";
    parameterTwo = "0";
    parameterThree = "0";
    parameterFour = "0";
    //Breakdown OptCode / Parameters...
    optCode = breakdown(inputArray[currentPos]);
    updateParameterModes(currentPos, inputArray, optCode);
  }
}

function reset() {
  copiedArray = inputArray1.slice();
  parameterOne = "0";
  parameterTwo = "0";
  parameterThree = "0";
  parameterFour = "0";
  currentPos = 0;
  evaluated = false;
}

var maxOutput = 0;
var maxSequence;

for(var x=0; x < sequenceArray.length; x++){
	
	for(var y=0; y < sequenceArray[x].length; y++){
  	input = Number(sequenceArray[x].charAt(y));
		intCodeComputer(copiedArray);
		reset();
  }
  
  if(maxOutput < output){
  	maxOutput = output;
    maxSequence = sequenceArray[x];
  }
  
  
  output = 0;
}

console.log("maxOutput = " + maxOutput);
console.log("maxSequence = " + maxSequence);

console.log("TEST Program finished...");
