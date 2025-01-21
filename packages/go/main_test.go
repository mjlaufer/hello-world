package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestAPIEndpoint(t *testing.T) {
	req, err := http.NewRequest("GET", "/api/greeting", nil)
	if err != nil {
		t.Fatalf("Failed to create request: %v", err)
	}

	rr := httptest.NewRecorder()

	handler := http.HandlerFunc(greetingHandler)
	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Errorf("Expected status code 200, got %d", rr.Code)
	}

	var response Greeting
	err = json.Unmarshal(rr.Body.Bytes(), &response)
	if err != nil {
		t.Fatalf("Failed to parse response JSON: %v", err)
	}

	expected := "Hello, World!"
	if response.Greeting != expected {
		t.Errorf("Expected greeting: %s, got: %s", expected, response.Greeting)
	}
}
