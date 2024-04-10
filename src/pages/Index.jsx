import React, { useState } from "react";
import { Box, Circle, Grid, GridItem, Heading, Button, Flex } from "@chakra-ui/react";

const Index = () => {
  const [board, setBoard] = useState(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(null)),
  );
  const [currentPlayer, setCurrentPlayer] = useState("green");

  const placePiece = (row, col) => {
    if (board[row][col] === null) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "green" ? "white" : "green");
    }
  };

  const passTurn = () => {
    setCurrentPlayer(currentPlayer === "green" ? "white" : "green");
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Heading mb={4}>Othello</Heading>
      <Heading size="md" mb={4}>
        Current Player: {currentPlayer === "green" ? "Green" : "White"}
      </Heading>
      <Grid templateColumns="repeat(8, 1fr)" gap={2} mb={4}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridItem key={`${rowIndex}-${colIndex}`} w={12} h={12} bg="gray.100" onClick={() => placePiece(rowIndex, colIndex)} display="flex" alignItems="center" justifyContent="center">
              {cell && <Circle size={10} bg={cell} />}
            </GridItem>
          )),
        )}
      </Grid>
      <Button onClick={passTurn}>Pass</Button>
    </Flex>
  );
};

export default Index;
