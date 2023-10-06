// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


/// @title Submission contract for Swisstronik Developer Challenge 2
/// @author Tanishka Borkar
/// @notice Sets a value for a private variable and can modify the same
/// @dev Setter and getter function for a private variable

contract Submission {

    /// @dev private vaiable is named as '_num'
    uint256 private  _num;


    /// @notice Set a new value for the variable
    /// @dev Setter function fo the private variable
    /// @param _newValue it is the new value for the private variable
    function modify(uint256 _newValue) public{
        _num = _newValue;
    }


    /// @notice Helps to view the current value of the private variable
    /// @dev Getter function for the private variable
    /// @return Current value of the private variable
    function currentValue() public view returns(uint256){
        return _num;
    }
}