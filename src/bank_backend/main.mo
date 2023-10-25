import Debug "mo:base/Debug";
import Float "mo:base/Float";

actor bank{
  stable var currentValue: Float=0;
  currentValue :=0;

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Float){
    let tempValue: Float = currentValue - amount;
    if(tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Amount too large");
    }
  };

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func simpleIntrest(): async Float{
    let intrestRate : Float = 0.5;
    let numberoftime : Float = 1;
    let simpleintrest = currentValue * intrestRate * numberoftime;
    return currentValue+simpleintrest;
  };

  public func pli_calculator(amount: Float, intrest: Float, no_of_year: Float): async Float{
    let pli = amount*intrest*no_of_year;
    return pli;
  };
}