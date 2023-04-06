package main

import (
    "fmt"
    "strings"
)

func main() {
    sentence := "This is a sample sentence. It contains some words, and some of these words repeat."
    wordCounts := make(map[string]int)

    words := strings.Split(sentence, " ")

    for _, word := range words {
        word = strings.Trim(word, ".,")

        if _, ok := wordCounts[word]; !ok {
            wordCounts[word] = 1
        } else {
            wordCounts[word]++
        }
    }

    for word, count := range wordCounts {
        fmt.Printf("%s: %d\n", word, count)
    }
}
