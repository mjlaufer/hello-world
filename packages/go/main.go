package main

import (
	"encoding/json"
	"net/http"
)

type Greeting struct {
	Greeting string `json:"greeting"`
}

func greetingHandler(w http.ResponseWriter, r *http.Request) {
	writeJSONResponse(w, Greeting{Greeting: "Hello, World!"})
}

func writeJSONResponse(w http.ResponseWriter, data interface{}) {
	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}

func main() {
	http.HandleFunc("/api/greeting", greetingHandler)

	port := "8000"
	println("Server is running on http://localhost:" + port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		println("Error starting server:", err.Error())
	}
}
