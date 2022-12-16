Feature: Go to the cinema tests
    Scenario: The first positive test
        Given user is on start page1
        When user click element a1
        And click element b1
        And click element c1
        And click element d1
        Then user sees ver.1 "Получить код бронирования"

    Scenario: The second positive test
        Given user is on start page2
        When user click element a2
        And click element b2
        And click element c2
        And click element d2
        And click element e2
        Then user sees ver.2 "Получить код бронирования"

    Scenario: The negative test
        Given user is on start page3
        When user click element a3
        And click element b3
        And click element c3
        And click element d3
        Then user sees ver.3 "Забронировать"



