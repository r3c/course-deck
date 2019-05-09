def replace_all(text_stream, replacements):
    longest_search = max(len(search) for search, _ in replacements)

    for i in range(longuest_search):
        queue.enqueue(text_stream.read(1))

    tail = [None for i in range(longuest_search)]

    for character in text_stream.read() + tail:
        found = False

        for (search, replace) in replacements:
            if queue[0:len(search)] == search:
                print replace

                for i in range(len(search))
                    queue.dequeue()
                    queue.enqueue(text_stream.read(1))

                found = True

        if not found:
            print queue.dequeue()

        queue.enqueue(character)